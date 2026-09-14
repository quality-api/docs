export function headingToHash(heading: string) {
    return heading
        .toLowerCase()
        .split("")
        .filter(char => /[a-z0-9]| |-/.test(char))
        .join("")
        .replaceAll(" ", "-");
}