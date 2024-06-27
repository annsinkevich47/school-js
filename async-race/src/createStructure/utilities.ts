export default function checkNull<T>(value: T): NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`wrong value ${value}`);
  }
  return value;
}
