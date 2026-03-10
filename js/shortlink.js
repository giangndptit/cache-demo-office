const redirectToLink = (url) => {
    window.location.href = url;
}

const main = () => {
    redirectToLink('attendance://link');
    // redirectToLink('bizappstore://link');
}

main();