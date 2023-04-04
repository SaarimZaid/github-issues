let page = 2
const fetchFunc = async (page) => {
    
    const url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(url, options).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('page-no').innerHTML = ` Page number= ${page-1} ` 
        document.getElementById('issue-title').innerHTML = ''
        for(let issue of data){
            let li = document.createElement('li')
            li.innerHTML = issue.title ;
            document.getElementById('issue-title').appendChild(li)
        }
    }).catch((e) => {
        console.log(e);
    })
}

const loadNext = () => {
    page++
    fetchFunc(page)
}
const loadPrev = () => {
    if (page > 2) {
        page--
        fetchFunc(page)
    }
}
fetchFunc(page)