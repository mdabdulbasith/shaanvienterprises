"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { createBrowserSupabase } from "@/lib/supabase-browser";

interface Submission {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  created_at: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [deleting, setDeleting] = useState(false);
  
  // Filtering
  const [serviceFilter, setServiceFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"newest" | "earliest">("newest");
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Bulk actions
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkDeleting, setBulkDeleting] = useState(false);

  useEffect(() => {
    const init = async () => {
      const res = await fetch("/api/admin/submissions", { credentials: "include" });
      const payload = await res.json().catch(() => null);

      if (!res.ok) {
        if (res.status === 401) router.push("/admin/login");
        else setError((payload && payload.error) || "Failed to load submissions");
        setLoading(false);
        return;
      }

      setSubmissions(payload.submissions || []);
      setLoading(false);
    };

    init();
  }, [router]);

  const handleLogout = async () => {
    if (!confirm("Are you sure you want to logout?")) return;
    const supabase = createBrowserSupabase();
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleDelete = async () => {
    if (!selectedSubmission) return;
    if (!confirm("Are you sure you want to delete this submission?")) return;

    setDeleting(true);
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id: selectedSubmission.id }),
      });

      if (res.ok) {
        setSubmissions((prev) =>
          prev ? prev.filter((s) => s.id !== selectedSubmission.id) : null
        );
        setSelectedSubmission(null);
      } else {
        alert("Failed to delete submission");
      }
    } catch (err) {
      alert("Error deleting submission");
    }
    setDeleting(false);
  };

  const handleBulkDelete = async () => {
    if (selectedIds.size === 0) return;
    if (!confirm(`Delete ${selectedIds.size} submission(s)?`)) return;

    setBulkDeleting(true);
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ ids: Array.from(selectedIds) }),
      });

      if (res.ok) {
        setSubmissions((prev) =>
          prev ? prev.filter((s) => !selectedIds.has(s.id)) : null
        );
        setSelectedIds(new Set());
      } else {
        alert("Failed to delete submissions");
      }
    } catch (err) {
      alert("Error deleting submissions");
    }
    setBulkDeleting(false);
  };

  // Filter and sort logic
  const filtered = submissions?.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesService = serviceFilter === "all" || item.service === serviceFilter;
    
    return matchesSearch && matchesService;
  }) || [];

  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    
    return sortBy === "newest" ? dateB - dateA : dateA - dateB;
  });

  // Pagination
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const paginatedData = sorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(paginatedData.map((s) => s.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  // Get unique services and stats
  const services = Array.from(new Set(submissions?.map((s) => s.service) || [])).sort();
  const stats = services.map((service) => ({
    service,
    count: submissions?.filter((s) => s.service === service).length || 0,
  }));

  if (loading) {
    return (
      <main className="min-h-screen bg-white p-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-lg bg-slate-50 p-12 text-center">
            <p className="text-slate-600">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-8 border-b border-slate-200">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A] mb-1">Contact Submissions</h1>
            <p className="text-slate-600 text-sm">Manage all contact inquiries.</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 rounded-lg bg-[#FF9805] hover:bg-[#e08605] text-white text-sm font-medium transition"
          >
            Logout
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.service}
              className="rounded-lg border border-slate-200 p-4 text-center hover:border-[#00B2FE] hover:bg-blue-50 transition cursor-pointer"
              onClick={() => {
                setServiceFilter(stat.service);
                setCurrentPage(1);
              }}
            >
              <p className="text-xs text-slate-500 font-medium mb-1 truncate">{stat.service}</p>
              <p className="text-xl font-bold text-[#0F172A]">{stat.count}</p>
            </div>
          ))}
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
            <p className="text-sm text-red-700">Error: {error}</p>
          </div>
        )}

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#0F172A] mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B2FE] focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">Service</label>
            <select
              value={serviceFilter}
              onChange={(e) => {
                setServiceFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00B2FE] focus:border-transparent transition bg-white"
            >
              <option value="all">All Services</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">Sort</label>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as "newest" | "earliest");
                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00B2FE] focus:border-transparent transition bg-white"
            >
              <option value="newest">Newest First</option>
              <option value="earliest">Earliest First</option>
            </select>
          </div>

          {selectedIds.size > 0 && (
            <button
              onClick={handleBulkDelete}
              disabled={bulkDeleting}
              className="px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition disabled:opacity-60"
            >
              Delete {selectedIds.size}
            </button>
          )}
        </div>

        {/* Table */}
        <div className="rounded-lg border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={
                        paginatedData.length > 0 &&
                        paginatedData.every((s) => selectedIds.has(s.id))
                      }
                      onChange={(e) => toggleSelectAll(e.target.checked)}
                      className="rounded border-slate-300"
                    />
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-[#0F172A]">Name</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#0F172A]">Email</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#0F172A]">Service</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#0F172A]">Message</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#0F172A]">Date</th>
                  <th className="px-6 py-4 text-left font-semibold text-[#0F172A]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-slate-600">
                      {searchTerm || serviceFilter !== "all"
                        ? "No results found"
                        : "No submissions yet"}
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((submission) => (
                    <tr key={submission.id} className="hover:bg-slate-50 transition">
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          checked={selectedIds.has(submission.id)}
                          onChange={() => toggleSelect(submission.id)}
                          className="rounded border-slate-300"
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-[#0F172A]">
                        {submission.name}
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-sm">{submission.email}</td>
                      <td className="px-6 py-4 text-slate-600">{submission.service}</td>
                      <td className="px-6 py-4 text-slate-600 max-w-xs truncate">
                        {submission.message}
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-xs whitespace-nowrap">
                        {new Date(submission.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelectedSubmission(submission)}
                          className="text-[#00B2FE] hover:text-[#0099DD] text-sm font-medium transition"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-600">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, sorted.length)} of {sorted.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50 disabled:opacity-50 transition"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    currentPage === page
                      ? "bg-[#00B2FE] text-white"
                      : "border border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50 disabled:opacity-50 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-[#0F172A]">Submission Details</h2>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="p-2 hover:bg-slate-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Name</p>
                  <p className="font-medium text-[#0F172A]">{selectedSubmission.name}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Service</p>
                  <p className="font-medium text-[#0F172A]">{selectedSubmission.service}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Email</p>
                  <p className="text-[#00B2FE] break-all">{selectedSubmission.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Date</p>
                  <p className="text-slate-600">
                    {new Date(selectedSubmission.created_at).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-xs font-semibold text-slate-500 uppercase mb-3">Message</p>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap break-words bg-slate-50 p-4 rounded-lg">
                  {selectedSubmission.message}
                </p>
              </div>

              <div className="flex gap-3 border-t border-slate-200 pt-6">
                <a
                  href={`mailto:${selectedSubmission.email}`}
                  className="flex-1 px-4 py-2.5 bg-[#00B2FE] hover:bg-[#0099DD] text-white rounded-lg text-sm font-medium transition text-center"
                >
                  Reply via Email
                </a>
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
