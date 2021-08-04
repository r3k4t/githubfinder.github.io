// Query Selector
var form = document.querySelector('#card');
var searchBtn = document.querySelector('#searchBtn');
var searchUser = document.querySelector('#searchUser');

var ui = new UI();

// Add Event Listener
form.addEventListener('submit', (e) => {
    let userText = searchUser.value;

    if(userText !== '') {
        fetch(`https://api.github.com/users/${userText}`)
            .then(response => response.json())
            .then(data => {
                if(data.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found','alert alert-danger');
                } else {
                    // show profile
                    console.log(data);
                    ui.showProfile(data);
                }
               )}
             }else {
               ui.clearProfile();
            }
            e.preventDefault();
            })
