document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('uploadForm');
  const fileInput = document.getElementById('uploadFile');
  const statusEl = document.getElementById('uploadStatus');

  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    statusEl.textContent = 'Đang upload...';
    const file = fileInput.files && fileInput.files[0];
    if (!file) {
      statusEl.textContent = 'Vui lòng chọn file.';
      return;
    }

    try {
      const fd = new FormData();
      fd.append('image', file, file.name);

      const res = await fetch('/admin/upload', {
        method: 'POST',
        body: fd,
      });

      if (res.ok) {
        statusEl.textContent = 'Upload successful. Please refresh the page to see changes.';
      } else {
        const text = await res.text().catch(() => res.statusText);
        statusEl.textContent = 'Upload error: ' + (text || res.statusText);
      }
    } catch (err) {
      statusEl.textContent = 'Upload failed: ' + (err && err.message ? err.message : err);
    }
  });
});
