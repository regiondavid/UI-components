function createCustomSelect(id) {
  var createInnerText = "<div class='select-input'></div><div class='select-options'><div class='select-option'></div><div class='select-option'></div><div class='select-option'></div></div>";
  var selectContainer = document.createElement('div');
  selectContainer.className = 'select-container';
  selectContainer.innerHTML = createInnerText;
  document.getElementById(id).appendChild(selectContainer);
}

function StarSelect(id) {
  this.target = id;
}

StarSelect.prototype.createFunc = createCustomSelect(this.target);
