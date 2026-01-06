function process() {
  const text = input.value;
  const find = document.getElementById("find").value;
  const replace = document.getElementById("replace").value;

  if (!find) return;

  const regex = new RegExp(find, "g");
  output.value = text.replace(regex, replace);
}
