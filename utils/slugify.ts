export default function slugify(value: string) {
    value = value.replace(/^\s+|\s+$/g, '');
    value = value.toLowerCase();
    value = value.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    return value;
}