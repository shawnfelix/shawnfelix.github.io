---
layout: default
title: Blog
permalink: /blog/
---

<div class="fluid-container">
  <div class="col-md-11">
    <h1>Blog</h1>
    <div style="display:flex;align-items:center;gap:12px;max-width:100%;">
      <input id="blog-search" type="text" class="form-control mb-3" placeholder="Search blog posts..." style="max-width:320px; font-size:1.1rem; font-weight:300; height:32px; background:#232325; color:#fff; border:none; border-radius:8px; padding:4px 12px; margin-bottom:0;">
      <select id="blog-sort" class="form-select mb-3" style="width:140px; height:32px; background:#232325; color:#fff; border:none; border-radius:8px; font-size:1.05rem; font-weight:300;">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>
    </div>
    <ul id="blog-list">
      {% assign posts = site.posts | sort: 'date' | reverse %}
      {% for post in posts %}
      <li class="blog-list-item" data-title="{{ post.title | escape }}" data-content="{{ post.content | strip_html | escape }}">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>- {{ post.date | date: '%B %e, %Y' }}</small>
      </li>
      {% endfor %}
    </ul>
    <div id="no-results" style="display:none;color:#b8aaff;font-size:1.1rem;">No posts found.</div>
  </div>
</div>
<script>
  // Blog search and filter functionality + sort
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('blog-search');
    const sortSelect = document.getElementById('blog-sort');
    const blogList = document.getElementById('blog-list');
    const items = Array.from(blogList.querySelectorAll('.blog-list-item'));
    const noResults = document.getElementById('no-results');
    function filterAndSort() {
      const query = searchInput.value.trim().toLowerCase();
      let visibleItems = items.filter(function(item) {
        const title = item.getAttribute('data-title').toLowerCase();
        const content = item.getAttribute('data-content').toLowerCase();
        const match = title.includes(query) || content.includes(query);
        item.style.display = match ? '' : 'none';
        return match;
      });
      // Sort
      const sortVal = sortSelect.value;
      visibleItems.sort(function(a, b) {
        if (sortVal === 'newest' || sortVal === 'oldest') {
          // Use data-date attribute for sorting if available
          const dateA = new Date(a.querySelector('small').textContent.replace(/.*- /, ''));
          const dateB = new Date(b.querySelector('small').textContent.replace(/.*- /, ''));
          return sortVal === 'newest' ? dateB - dateA : dateA - dateB;
        } else if (sortVal === 'az') {
          return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));
        } else if (sortVal === 'za') {
          return b.getAttribute('data-title').localeCompare(a.getAttribute('data-title'));
        }
        return 0;
      });
      // Re-append sorted items
      visibleItems.forEach(item => blogList.appendChild(item));
      noResults.style.display = visibleItems.length === 0 ? '' : 'none';
    }
    searchInput.addEventListener('input', filterAndSort);
    sortSelect.addEventListener('change', filterAndSort);
    filterAndSort();
  });
</script>
