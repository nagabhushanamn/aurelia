

function teach() {
    try {
        console.log('teaching topic-1');
        // throw new Error('hate topic-2');
        setTimeout(() => {
            console.log('teaching topic-2');
            throw new Error('hate topic-2');
            console.log('teaching topic-2 ends');
        }, 5000);
        console.log('teaching topic-1 ends');
    } catch (e) {
        console.log("i caught-" + e.message);
    }
}
teach();