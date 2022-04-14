import Template from 'template.js';

class BizCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = Template.render({
      first_name: "Takumi",
      last_name: 'Takasugi',
      title: 'Student of all Sciences',
      phone: '080-3834-1377',
      email: 'hhhhoooo@gmail.com',
      website: 'www.imgod.com'
    });
  }
}

if (!customElements.get('biz-card')) {
  customElements.define('biz-card', BizCard);
}
