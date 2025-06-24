const loginForm = document.forms.login

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const result = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { Authorization: `Basic ${btoa(`${loginForm.email.value}:${loginForm.password.value}`)}` },
    })

    result.ok ? console.log('Success:', await result.json()) : console.error('Login failed:', result.statusText)
})
