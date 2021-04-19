let expect = require('expect');
const { describe } = require('mocha');

var {generateMessage, generateLocationMessage} = require('./message');

describe('Generate Message', ()=>{
    it("Should generate correct message object", ()=>{
        let from = "WDJ",
            text = "Some random text",
            message = generateMessage(from, text);
        
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});

    });
});

describe('Generate Location Message', ()=>{
    it("Should generate correct location message", ()=>{
        let from = "Claire",
            lat = 15,
            lng = 52,
            url = `https://www.google.com/maps?q=${lat}, ${lng}`
            message = generateLocationMessage(from, lat, lng);
        
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});

    });
});