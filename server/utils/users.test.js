const expect = require('expect')

const {Users} = require('./users');

describe('Users', ()=>{
    let users;

    //beforeEach() would run before every it() below.
    beforeEach(() => {
        users = new Users();
        users.users = [{
        id: "1",
        name: "Mike",
        room: "The Office Fans"
        },{
        id: "2",
        name: "Sam",
        room: "Scrubs Fans"
        },{
        id: "3",
        name: "Jose",
        room: "The Office Fans"
        }]
    });

    it('Should add new user', ()=>{
        let users = new Users();
        let user = {
            id: "sdffsd",
            name: "Dhaval",
            room: "The Office Fans"
        };
        let reUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    })

    it('Should return names for the office fans', ()=>{
        let userList = users.getUserList('The Office Fans');

        expect(userList).toEqual(['Mike', 'Jose']);
    })

    it('Should return names for the scrubs fans', ()=>{
        let userList = users.getUserList('Scrubs Fans');

        expect(userList).toEqual(['Sam']);
    })
    it('Should find user', ()=>{
        let userID = '2'
            user = users.getUser(userID);

        expect(user.id).toBe(userID);
    })
    it('Should not find user', ()=>{
        let userID = '100'
            user = users.getUser(userID);

        expect(user).toBeUndefined();
    })
    it('Should remove a user', ()=>{
        let userID = '1'
            user = users.removeUser(userID);

        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    })
    it('Should not remove  user', ()=>{
        let userID = '100'
            user = users.removeUser(userID);

        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    })
});