const icons = process.env.ICONS;
const iconsetName = "si";

async function getIcon(name) {
    if (icons[name] == null) {
        console.error(`Icon "${name}" not available`);
        return "";
    }

    return icons[name];
}

async function getIconList() {
    return Object.keys(icons).map((name) => ({ name }));
}

window.customIcons = window.customIcons ?? {};
window.customIcons[iconsetName] = { getIcon, getIconList };

window.customIconsets = window.customIconsets ?? {};
window.customIconsets[iconsetName] = getIcon;
