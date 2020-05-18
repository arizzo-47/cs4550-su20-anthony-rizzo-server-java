(function () {

    let users = [
        {username: 'alice', password: 'alice', first: 'Alice', last: 'Wonderland', role: 'FACULTY'},
        {username: 'anthony', password: 'pswd', first: 'Anthony', last: 'Rizzo', role: 'STUDENT'},
        {username: 'jdupe', password: 'Password', first: 'Jared', last: 'Duperre', role: 'ADMIN'},
    ]
    let $tbody, $addBtn, $updateBtn
    let $usernameFld, $passwordFld, $firstFld, $lastFld, $roleFld
    let service = new AdminUserServiceClient()
    let selectedUser

    // Event created whenever key stroke, button pressed, etc.
    function deleteUser(event) {
        const target = event.currentTarget
        const $button = $(target)
        const userId = $button.attr('id') //Read id

        service.deleteUser(userId)
            .then(function() {
                users = users.filter(function (user) {
                    return user._id !== userId
                })
                renderUsers()
        })
    }

    function renderUser(user) {
        selectedUser = user

        $usernameFld.val(user.username)
        $passwordFld.val(user.password)
        $firstFld.val(user.first)
        $lastFld.val(user.last)
        $roleFld.val(user.role)
    }

    function updateUser() {
        const updatedUser = {
            _id: selectedUser._id,
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            first: $firstFld.val(),
            last: $lastFld.val(),
            role: $roleFld.val()
        }

        service.updateUser(selectedUser._id, updatedUser)
            .then(function(status) {
                users = users.map(function(user) {

                    if(user._id === selectedUser._id) {
                        renderUsers()
                        return updatedUser
                    } else {
                        return user
                    }
                })
            })
    }

    function findUserById(event) {
        const target = event.currentTarget
        const $button = $(target)
        const userId = $button.attr('id') //Read id

        service.findUserById(userId)
            .then(function(user) {
                renderUser(user)
            })
    }


    function renderUsers() {
        //Grab template before emptying
        const template = $('.wbdv-template')[0]
        const $template = $(template)
        const clone = $template.clone()
        $tbody.empty()

        for(let i=0; i<users.length; i++) {
            const user = users[i]
            const copy = clone.clone()
            copy.find('.wbdv-username').html(user.username)
            copy.find('.wbdv-password').html(user.password)
            copy.find('.wbdv-first-name').html(user.first)
            copy.find('.wbdv-last-name').html(user.last)
            copy.find('.wbdv-role').html(user.role)

            copy.find('.wbdv-remove')
                .attr('id', user._id)
                .click(deleteUser)

            copy.find('.wbdv-edit')
                .attr('id', user._id)
                .click(findUserById)
            $tbody.append(copy)
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
                renderUsers()
            })
    }

    function findAllUsers() {
        service.findAllUsers()
            .then(function (allUsers) {
                users = allUsers
                renderUsers()
            })
    }


    function main() {
        $tbody = $('tbody')
        $addBtn = $('.wbdv-create')
        $addBtn.click(createUser)

        $updateBtn = $('.wbdv-update')
        $updateBtn.click(updateUser)

        $usernameFld = $('.wbdv-username-fld')
        $passwordFld = $('.wbdv-password-fld')
        $firstFld = $('.wbdv-first-fld')
        $lastFld = $('.wbdv-last-fld')
        $roleFld = $('.wbdv-role-fld')

        findAllUsers()
    }

    jQuery(main)

})()