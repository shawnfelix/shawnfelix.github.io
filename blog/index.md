---
layout: default
title: Blog
permalink: /blog/
---

<div class="fluid-container">
  <div class="col-md-11">
    <h1 class="mb-4 user-select-none" style="font-family:'Inter',sans-serif;letter-spacing:1px;">Blog</h1>
    <div style="display:flex;align-items:center;gap:12px;max-width:100%;margin-bottom:18px;">
      <input id="blog-search" type="text" class="form-control" placeholder="Search blog posts..." style="max-width:320px; font-size:1.1rem; font-weight:300; height:32px; background:var(--ph-bg-medium); color:var(--ph-light); border:none; border-radius:8px; padding:4px 12px;">
      <select id="blog-sort" class="form-select" style="width:140px; height:32px; background:var(--ph-bg-medium); color:var(--ph-light); border:none; border-radius:8px; font-size:1.05rem; font-weight:300;">
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>
    </div>
    <div class="blog-list" style="margin-top: 32px;">
      {% assign posts = site.posts | sort: 'date' | reverse %}
      {% for post in posts %}
      <div class="blog-post-card d-flex align-items-stretch mb-2 p-0" style="border-radius:18px; overflow:hidden; min-height:140px; cursor:pointer; margin-bottom: 1.05rem;" onclick="window.location='{{ post.url | relative_url }}'">
        <div class="blog-thumb d-flex align-items-center justify-content-center" style="width:175px; min-width:175px; height:175px; background:rgba(80,80,90,0.13); border-radius:12px; margin:16px 0 16px 0; overflow:hidden; cursor:pointer;" onclick="window.location='{{ post.url | relative_url }}'; event.stopPropagation();">
          {% if post.thumbnail %}
            <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail" style="width:100%; height:100%; object-fit:cover; border-radius:12px; cursor:pointer;" onclick="window.location='{{ post.url | relative_url }}'; event.stopPropagation();" />
          {% else %}
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--ph-accent);font-size:2.2rem;opacity:0.5;cursor:pointer;" onclick="window.location='{{ post.url | relative_url }}'; event.stopPropagation();">📝</div>
          {% endif %}
        </div>
        <div class="blog-info flex-grow-1 d-flex flex-column justify-content-center p-4" style="width:auto; min-width:0; border:none; cursor:pointer;" onclick="window.location='{{ post.url | relative_url }}'; event.stopPropagation();">
          <div class="blog-title mb-1" style="font-size:1.5rem; font-weight:600; color:var(--ph-light); letter-spacing:0.5px; cursor:pointer;" onclick="window.location='{{ post.url | relative_url }}'; event.stopPropagation();">
            <a href="{{ post.url | relative_url }}" style="color:var(--ph-light); text-decoration:none; cursor:pointer;" onclick="window.location='{{ post.url | relative_url }}'; event.stopPropagation();">{{ post.title }}</a>
          </div>
          <div class="blog-meta mb-2" style="font-size:1rem; color:var(--ph-accent); opacity:0.85; cursor:pointer;" onclick="window.location='{{ post.url | relative_url }}'; event.stopPropagation();">
            <span>{{ post.date | date: '%B %e, %Y' }}</span>
            {% if post.author %} &middot; <span>{{ post.author }}</span>{% endif %}
            {% if post.tags %} &middot; <span>{% for tag in post.tags %}#{{ tag }} {% endfor %}</span>{% endif %}
          </div>
          <div class="blog-desc" style="font-size:1.08rem; color:var(--ph-accent); opacity:0.92; cursor:pointer;" onclick="window.location='{{ post.url | relative_url }}'; event.stopPropagation();">
            {{ post.excerpt | strip_html | truncate: 140 }}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    <div id="no-results" style="display:none;color:var(--ph-accent);font-size:1.1rem;">No posts found.</div>
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('blog-search');
    const sortSelect = document.getElementById('blog-sort');
    const blogList = document.querySelector('.blog-list');
    const allItems = Array.from(blogList.querySelectorAll('.blog-post-card'));
    const noResults = document.getElementById('no-results');
    function filterAndSort() {
      const query = searchInput.value.trim().toLowerCase();
      const sortVal = sortSelect.value;
      // Filter items
      const filtered = allItems.filter(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        const content = item.getAttribute('data-content').toLowerCase();
        return title.includes(query) || content.includes(query);
      });
      // Sort filtered items
      filtered.sort(function(a, b) {
        if (sortVal === 'newest' || sortVal === 'oldest') {
          const dateA = new Date(a.getAttribute('data-date'));
          const dateB = new Date(b.getAttribute('data-date'));
          return sortVal === 'newest' ? dateB - dateA : dateA - dateB;
        } else if (sortVal === 'az') {
          return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));
        } else if (sortVal === 'za') {
          return b.getAttribute('data-title').localeCompare(a.getAttribute('data-title'));
        }
        return 0;
      });
      // Remove all items from DOM
      allItems.forEach(item => item.remove());
      // Add filtered & sorted items back
      filtered.forEach(item => blogList.appendChild(item));
      // Show/hide no results
      noResults.style.display = filtered.length === 0 ? '' : 'none';
    }
    searchInput.addEventListener('input', filterAndSort);
    sortSelect.addEventListener('change', filterAndSort);
    filterAndSort();
  });
</script>
<style>
  .blog-list {
    margin-top: 12px;
  }
  .blog-post-card {
    transition: box-shadow 0.18s, background 0.22s cubic-bezier(.4,0,.2,1), transform 0.22s cubic-bezier(.4,0,.2,1);
    color: var(--ph-bg-dark) !important;
    border-radius: 9px;
    background: none !important;
    box-shadow: none !important;
  }
  .blog-post-card:hover {
    background: none !important;
    box-shadow: none !important;
    cursor: pointer;
  }
  .blog-info {
    border: none !important;
    background: none !important;
  }
  .blog-title a {
    transition: text-decoration 0.18s;
  }
  .blog-post-card:hover .blog-title a,
  .blog-post-card:hover .blog-meta span,
  .blog-post-card:hover .blog-desc {
    text-decoration: underline;
    text-underline-offset: 3px;
    color: var(--ph-light) !important;
  }
  .blog-thumb {
    width: 175px !important;
    min-width: 175px !important;
    height: 175px !important;
    aspect-ratio: 1/1;
    background: rgba(80,80,90,0.13);
    border-radius: 12px;
    margin: 16px 0 16px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blog-info {
    border: none !important;
  }
  @media (max-width: 767.98px) {
    .blog-post-card { flex-direction: column; min-height: 0; }
    .blog-thumb { width: 100% !important; min-width: 0 !important; height: 100px !important; aspect-ratio: unset; border-radius: 0; margin: 0; }
    .blog-info { width: 100%; padding: 1.2rem 1.1rem; }
  }
</style>
