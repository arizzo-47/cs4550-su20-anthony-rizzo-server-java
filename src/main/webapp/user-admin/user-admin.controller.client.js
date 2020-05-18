(function () {

    let users = [
        {username: 'alice', password: 'alice', first: 'Alice', last: 'Wonderland', role: 'FACULTY'},
        {username: 'anthony', password: 'pswd', first: 'Anthony', last: 'Rizzo', role: 'STUDENT'},
        {username: 'jdupe', password: 'Password', first: 'Jared', last: 'Duperre', role: 'ADMIN'},
    ]
    let $tbody, $addBtn
    let $usernameFld, $passwordFld, $firstFld, $lastFld, $roleFld
    let service = new AdminUserServiceClient()

    function renderAllUsers() {
        //Grab template before emptying
        const template = $('.wbdv-template')[0]
        const $template = $(template)
        const clone = $template.clone()
        $tbody.empty()

        for(let i=0; i<users.length; i++) {
            const user = users[i]
            const copy = clone.clone()
            $tbody.append(copy)
            copy.find('.wbdv-username').html(user.username)
            copy.find('.wbdv-password').html(user.password)
            copy.find('.wbdv-first-name').html(user.first)
            copy.find('.wbdv-last-name').html(user.last)
            copy.find('.wbdv-role').html(user.role)
        }
    }

    function createUser() {
        const username = $usernameFld.val()
        const password = $passwordFld.val()
        const first = $firstFld.val()
        const last = $lastFld.val()
        const role = $roleFld.val()

        const newUser = {
            last: last,
            first: first,
            username: username,
            password: password,
            role: role
        }

        service.createUser(newUser)
            .then(function (actualUser) {
                users.push(actualUser)
                renderAllUsers()
            })
    }

    function findAllUsers() {
        service.findAllUsers()
            .then(function (allUsers) {
                users = allUsers
                console.log(allUsers)
                renderAllUsers()
            })
    }


    function main() {
        $tbody = $('tbody')
        $addBtn = $('.wbdv-create')
        $addBtn.click(createUser)

        $usernameFld = $('.wbdv-username-fld')
        $passwordFld = $('.wbdv-password-fld')
        $firstFld = $('.wbdv-first-fld')
        $lastFld = $('.wbdv-last-fld')
        $roleFld = $('.wbdv-role-fld')

        findAllUsers()
    }

    jQuery(main)

})()