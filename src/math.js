const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi; // exporting the default value
export { doublePi, triplePi }; // exporting the non-default values
