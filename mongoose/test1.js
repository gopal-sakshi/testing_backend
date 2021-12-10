let EmailModel = require('./email1')

let msg = new EmailModel({
  email: 'ada.lovelace@gmail.com'
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
   
console.log(msg);