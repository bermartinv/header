var anchors = document.querySelectorAll('.special-link')
anchors.forEach(function (anchor) {
  var linkText = anchor.innerText
  console.log('Setting: ', linkText)
  anchor.setAttribute('data-linkText', linkText)
})
