// icon-album
export default {
  functional: true,
  render: function (h, { props }) {
    let width = props.width || 20
    let height = props.height || 20
    const viewBox = props.viewBox || '0 0 20 20'

    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-album',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<rect x="5" y="2" width="10" height="1" /><rect x="3" y="4" width="14" height="1" /><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11" />'
      }
    })
  }
}
