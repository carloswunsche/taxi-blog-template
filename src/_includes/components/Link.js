const {html} = require('common-tags');

function Link({link, linkText}) {
    return html`
        <a href="${link}">${linkText}</a>
    `;
};

module.exports = Link;