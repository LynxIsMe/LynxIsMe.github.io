(() => {
  const header = document.querySelector('.site-header');
  const updateHeader = () => document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
  updateHeader();
  new ResizeObserver(updateHeader).observe(header);
  const stream = document.querySelector('.reading-stream');
  if (!stream) return;

  const mobile = matchMedia('(max-width: 850px)');
  mobile.addEventListener('change', () => {
    stream.querySelectorAll('.contents-panel details').forEach(details => details.open = !mobile.matches);
  });
  let serial = 0;
  function prepare(entry, appended = false) {
    const prose = entry.querySelector('.prose');
    const prefix = 'article-' + (++serial) + '-';
    if (appended) {
      const ids = new Map();
      entry.querySelectorAll('[id]').forEach(el => {
        const old = el.id;
        ids.set(old, prefix + old);
        el.id = prefix + old;
      });
      entry.querySelectorAll('a[href^="#"]').forEach(a => {
        const raw = a.getAttribute('href').slice(1);
        let target = raw;
        try { target = decodeURIComponent(raw); } catch {}
        if (ids.has(target)) a.setAttribute('href', '#' + ids.get(target));
      });
    }
    const headings = [...prose.querySelectorAll('h1,h2,h3')];
    const panel = entry.querySelector('.contents-panel');
    if (!headings.length) return;
    const list = panel.querySelector('ol');
    const baseLevel = Math.min(...headings.map(h => Number(h.tagName.slice(1))));
    headings.forEach((heading, i) => {
      if (!heading.id) heading.id = prefix + 'section-' + i;
      const item = document.createElement('li');
      item.style.setProperty('--depth', Number(heading.tagName.slice(1)) - baseLevel);
      const link = document.createElement('a');
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = heading.textContent;
      link.addEventListener('click', () => {
        if (matchMedia('(max-width: 850px)').matches) panel.querySelector('details').open = false;
      });
      item.append(link);
      list.append(item);
    });
    panel.hidden = false;
    panel.querySelector('details').open = !matchMedia('(max-width: 850px)').matches;
    const generatedToc = prose.querySelector('[id$="markdown-toc"]');
    if (generatedToc) generatedToc.hidden = true;
  }

  const first = stream.querySelector('.reading-entry');
  prepare(first);
  const visited = new Set([first.dataset.url]);
  const nextArea = document.querySelector('.reading-next');
  const status = nextArea.querySelector('.load-status');
  let next = first.dataset.next;
  let loading = false;
  let observer;
  async function loadNext() {
    if (loading || !next || visited.has(next)) return;
    loading = true;
    observer?.unobserve(nextArea);
    status.textContent = 'Loading next article…';
    try {
      const response = await fetch(next);
      if (!response.ok) throw new Error('Article unavailable');
      const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
      const entry = doc.querySelector('.reading-entry');
      if (!entry) throw new Error('Article missing');
      prepare(entry, true);
      visited.add(next);
      stream.append(entry);
      next = entry.dataset.next;
      nextArea.querySelector('a')?.remove();
      const link = document.createElement('a');
      if (next && !visited.has(next)) {
        link.className = 'next-article';
        link.href = next;
        link.textContent = doc.querySelector('.next-article')?.textContent || 'Next article ↓';
      } else {
        next = null;
        link.href = first.querySelector('.post-heading > a').href;
        link.textContent = 'All articles →';
      }
      nextArea.prepend(link);
      status.textContent = next ? '' : 'You’ve reached the end.';
      if (next) observer?.observe(nextArea);
    } catch {
      status.textContent = 'Continue with the next article link.';
    } finally {
      loading = false;
    }
  }
  if ('IntersectionObserver' in window && next) {
    observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) loadNext();
    }, { rootMargin: '0px 0px 300px 0px' });
    observer.observe(nextArea);
  }
})();