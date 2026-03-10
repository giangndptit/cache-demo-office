const redirectToLink = (url) => {
    window.location.href = url;
}

const main = () => {
    redirectToLink('attendance://link');
    setTimeout(() => {
        redirectToLink('bizappstore://link');
    }, 1000);
}

main();