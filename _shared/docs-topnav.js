/* 伊尔莱德手册通用顶部工具条：首页 / 全站搜索 / 返回上一级 */
(function () {
  if (window.__docsTopNav) return; window.__docsTopNav = 1;

  var style = document.createElement('style');
  style.textContent =
    '.g-nav{position:sticky;top:0;z-index:9999;display:flex;align-items:center;gap:8px;flex-wrap:wrap;' +
    'padding:9px 18px;background:rgba(255,255,255,.97);backdrop-filter:blur(6px);' +
    'border-bottom:1px solid #D8E1DE;font-size:.88rem;box-shadow:0 1px 4px rgba(22,33,30,.06)}' +
    '.g-nav a{text-decoration:none;font-weight:600;border-radius:6px;padding:4px 12px;border:1px solid #D8E1DE;' +
    'background:#fff;color:#0F8A66;transition:.15s;cursor:pointer}' +
    '.g-nav a:hover{background:#0F8A66;color:#fff;border-color:#0F8A66}' +
    '.g-nav .sep{opacity:.35;color:#98A6A1}' +
    '.g-nav__spacer{flex:1}' +
    '.g-nav__crumb{font-size:.78rem;color:#5F6E6A;max-width:38%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '@media print{.g-nav{display:none}}' +
    '@media(max-width:640px){.g-nav__crumb{display:none}}';
  document.head.appendChild(style);

  var nav = document.createElement('div');
  nav.className = 'g-nav';
  nav.innerHTML =
    '<a href="0-技术方案总索引.html">⌂ 首页</a>' +
    '<span class="sep">│</span>' +
    '<a href="搜索.html">🔍 全站搜索</a>' +
    '<span class="sep">│</span>' +
    '<a id="gNavBack" href="0-技术方案总索引.html">← 返回</a>' +
    '<span class="g-nav__spacer"></span>' +
    '<span class="g-nav__crumb" id="gNavCrumb"></span>';
  if (document.body) {
    document.body.insertBefore(nav, document.body.firstChild);
  }

  /* 识别进入来源：若从“搜索结果页”跳来，则“返回”指回搜索页并保留原关键词 */
  try {
    var back = document.getElementById('gNavBack');
    var crumb = document.getElementById('gNavCrumb');
    var ref = document.referrer || '';
    var m = ref.match(/搜索\.html(?:\?q=([^&#]+))?/i);
    if (m) {
      var q = '';
      if (m[1]) { try { q = decodeURIComponent(m[1]); } catch (e) { q = m[1]; } }
      back.href = '搜索.html' + (q ? ('?q=' + encodeURIComponent(q)) : '');
      back.textContent = '← 返回搜索结果';
    }
    var t = document.title ? document.title.replace(/\s*·\s*伊尔莱德.*$/i, '').trim() : '';
    if (t) crumb.textContent = t;
  } catch (e) {}
})();