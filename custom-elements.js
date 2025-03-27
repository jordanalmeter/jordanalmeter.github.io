// custom-elements.js
class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
			<br>
            <footer> Contact: dralmeter@gmail.com for general inquiries, or almeterj@durhamtech.edu for inquiries related to my current job.</footer>
        `
    }
}
window.customElements.define('app-footer', AppFooter)