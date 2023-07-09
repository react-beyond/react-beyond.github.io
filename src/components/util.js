export function removeIndent(input) {
  let lines = input.split('\n');

  // Remove initial empty line
  if (lines[0].trim() === '') {
    lines = lines.slice(1);
  }

  const indents = lines.slice(1)
    .filter(line => line.trim().length > 0) // Ignore empty lines or lines with spaces only
    .map(line => line.search(/\S/));
  const minIndent = Math.min(...indents);

  // Don't trim the first line if it's non-empty
  if (lines[0].trim().length > 0) {
    lines[0] = lines[0].trimStart();
  }

  for (let i = 1; i < lines.length; i++) {
    // Only trim the line if it contains non-space characters
    if (lines[i].trim().length > 0) {
      lines[i] = lines[i].slice(minIndent);
    }
  }
  return lines.join('\n');
}
