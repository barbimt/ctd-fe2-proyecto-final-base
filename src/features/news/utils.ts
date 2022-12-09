export const upperCaseTitle = (newTitle: string) => {
    const title = newTitle.split(" ")
        .map((str: string) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join(" ");
    return title;
}

export const getMinutosTranscurridos = (newDate: Date) => {
    const now = new Date();
    return Math.floor((now.getTime() - newDate.getTime()) / 60000)
}