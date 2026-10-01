const activities = [
  { title: 'The Last Horizon', meta: 'Movie • 1080p', time: '2m ago', icon: 'M' },
  { title: 'Signal Zero', meta: 'Series • S02E09', time: '8m ago', icon: 'S' },
  { title: 'Nightwave Live', meta: 'TV • Live', time: '24m ago', icon: 'L' },
  { title: 'Atlas Drift', meta: 'Movie • 4K', time: '1h ago', icon: 'A' }
];

const library = [
  { title: 'The Last Horizon', type: 'Movie', year: '2026', tag: 'HD' },
  { title: 'Signal Zero', type: 'Series', year: '2025', tag: 'Season 2' },
  { title: 'Nightwave Live', type: 'Live TV', year: 'Now', tag: 'Live' },
  { title: 'Atlas Drift', type: 'Movie', year: '2024', tag: '4K' },
  { title: 'Glass City', type: 'Series', year: '2023', tag: 'New' },
  { title: 'Echo Bay', type: 'Movie', year: '2022', tag: 'Favorite' },
  { title: 'Redline', type: 'Documentary', year: '2026', tag: 'Curated' },
  { title: 'After Hours', type: 'TV', year: '2025', tag: 'Popular' }
];

const activityList = document.getElementById('activityList');
const libraryGrid = document.getElementById('libraryGrid');
const searchInput = document.getElementById('searchInput');

function renderActivities() {
  activityList.innerHTML = activities
    .map(
      (item) => `
        <div class="activity-item">
          <div class="activity-icon">${item.icon}</div>
          <div class="activity-meta">
            <strong>${item.title}</strong>
            <small>${item.meta}</small>
          </div>
          <time>${item.time}</time>
        </div>
      `
    )
    .join('');
}

function renderLibrary(filter = '') {
  const filtered = library.filter((item) => {
    const search = filter.toLowerCase();
    return (
      item.title.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search) ||
      item.tag.toLowerCase().includes(search)
    );
  });

  libraryGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="library-card">
          <div class="library-cover">${item.title.slice(0, 2).toUpperCase()}</div>
          <div class="library-body">
            <strong>${item.title}</strong>
            <small>${item.type} • ${item.year}</small>
            <span class="tag">${item.tag}</span>
          </div>
        </article>
      `
    )
    .join('');
}

searchInput.addEventListener('input', (e) => renderLibrary(e.target.value));

renderActivities();
renderLibrary();
