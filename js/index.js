function identify() {
    analytics.identify('12345', {
        name: 'dylan fox',
        email: 'email@test.com'
    }, () => {
        console.log("identify call complete");
    });
}

function track() {
    analytics.track("click", {
        "title": "track click"
    }, () => {
        console.log("track call complete");
    });
}

function page() {
    analytics.page("home", {
        "category": "home page"
    }, () => {
        console.log("page call complete");
    });
}

function group() {
    analytics.group('evo', () => {
        console.log('group call complete');
    });
}

function alias() {
    analytics.alias('67890', '12345', () => {
        console.log('alias call complete');
    });
}