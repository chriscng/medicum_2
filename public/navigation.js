// Reference design's down-arrow/home/logout navigation; no API-key textbox.
const arrow = document.getElementById('arrowBtn');
const home = document.getElementById('homePopup');
const logout = document.getElementById('logoutBtn');
function closeMenu(returnFocus = false) {
  home.classList.remove('show');
  arrow.setAttribute('aria-expanded', 'false');
  if (returnFocus) arrow.focus();
}
arrow.addEventListener('click', event => {
  event.stopPropagation();
  const open = home.classList.toggle('show');
  arrow.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-left')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu(true);
});
// This app has no login/account session. As in the supplied reference, both
// controls return to index.html. Stop the microphone and socket BEFORE leaving.
function stopVoice() { document.getElementById('disconnect').click(); }
home.addEventListener('click', stopVoice);
logout.addEventListener('click', () => {
  stopVoice();
  window.location.assign('index.html');
});
