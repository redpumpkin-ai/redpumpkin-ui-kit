export const colors = {
    "green": "#27A847",
    "orange": "#FF9300",
    "red": "#DD0029",
    "blue": "#0058EC",
    "gray": "#d1d1d1",
    "purple": "#A100F7",
    "dark-gray": "#5A5A5B",
    "teal": "#00AB97",
};

export const colorWithOpacity = (color: string, opacity: number) => {
    const bigint = parseInt(color.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};