'use strict';
try {
  const data = JSON.parse(decodeURIComponent(location.hash.slice(1)));
  const s=data.snapshot, r=data.report;
  if (!['SAR','TA','Proposal','CS'].includes(r?.id) || !s?.account || !s?.program || !s?.model || !Number.isInteger(s.revision) || !Number.isFinite(s.account.value) || s.account.value<0 || !Array.isArray(s.account.holdings) || !Array.isArray(s.model.weights) || [s.account.holdings,s.model.weights].some(w=>w.length!==3||w.some(n=>!Number.isFinite(n)||n<0||n>100))) throw new Error('Invalid snapshot');
  const doc = new DOMParser().parseFromString(window.FolioReports.render(r,s),'text/html');
  document.title=doc.title;
  document.head.append(...doc.head.querySelectorAll('style'));
  document.body.replaceChildren(...doc.body.childNodes);
} catch {
  document.querySelector('#report-status').textContent='This report link is incomplete. Return to the portfolio conversation and generate a new report.';
}
