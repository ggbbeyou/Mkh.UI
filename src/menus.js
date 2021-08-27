const menus = [
  {
    name: '首页',
    type: 1,
    icon: 'home',
    level: 1,
    show: true,
    routeName: 'home',
  },
  {
    name: '布局组件',
    type: 0,
    icon: 'layout',
    level: 1,
    show: true,
    children: [
      {
        name: '容器(Container)',
        type: 1,
        icon: 'container',
        level: 2,
        show: true,
        routeName: 'doc_layout_container',
      },
      {
        name: '盒子(Box)',
        type: 1,
        icon: 'box',
        level: 2,
        show: true,
        routeName: 'doc_layout_box',
      },
      {
        name: '小盒子(BoxSmall)',
        type: 1,
        icon: 'box',
        level: 2,
        show: true,
        routeName: 'doc_layout_boxsmall',
      },
      {
        name: '弹性布局(Flex)',
        type: 1,
        icon: 'list',
        level: 2,
        show: true,
        routeName: 'doc_layout_flex',
      },
      {
        name: '滚动条(Scrollbar)',
        type: 1,
        icon: 'list',
        level: 2,
        show: true,
        routeName: 'doc_layout_scrollbar',
      },
      {
        name: '头部(Head)',
        type: 1,
        icon: 'list',
        level: 2,
        show: true,
        routeName: 'doc_layout_head',
      },
      {
        name: '面板分割(Split)',
        type: 1,
        icon: 'list',
        level: 2,
        show: true,
        routeName: 'doc_layout_split',
      },
    ],
  },
  {
    name: '基础组件',
    type: 0,
    icon: 'component',
    level: 1,
    show: true,
    children: [
      {
        name: '图标(Icon)',
        type: 1,
        icon: 'icon',
        level: 2,
        show: true,
        routeName: 'doc_base_icon',
      },
      {
        name: '按钮(Button)',
        type: 1,
        icon: 'button',
        level: 2,
        show: true,
        routeName: 'doc_base_button',
      },
    ],
  },
  {
    name: '高级组件',
    type: 0,
    icon: 'component',
    level: 1,
    show: true,
    children: [
      {
        name: '对话框(Dialog)',
        type: 1,
        icon: 'chat-o',
        level: 2,
        show: true,
        routeName: 'doc_advanced_dialog',
      },
      {
        name: '抽屉(Drawer)',
        type: 1,
        icon: 'list',
        level: 2,
        show: true,
        routeName: 'doc_advanced_drawer',
      },
      {
        name: '列表页(List)',
        type: 1,
        icon: 'list',
        level: 2,
        show: true,
        routeName: 'doc_advanced_list',
      },
      {
        name: '拖拽排序(DragSort)',
        type: 1,
        icon: 'list',
        level: 2,
        show: true,
        routeName: 'doc_advanced_drag_sort',
      },
      {
        name: '列表盒子(ListBox)',
        type: 1,
        icon: 'list',
        level: 2,
        show: true,
        routeName: 'doc_advanced_listbox',
      },
    ],
  },
  {
    name: '表单组件',
    type: 0,
    icon: 'form',
    level: 1,
    show: true,
    children: [
      {
        name: '表单(Form)',
        type: 1,
        icon: 'edit',
        level: 2,
        show: true,
        routeName: 'doc_advanced_form',
      },
      {
        name: '对话框表单(FormDialog)',
        type: 1,
        icon: 'edit',
        level: 2,
        show: true,
        routeName: 'doc_advanced_formdialog',
      },
      {
        name: '抽屉表单(FormDrawer)',
        type: 1,
        icon: 'edit',
        level: 2,
        show: true,
        routeName: 'doc_advanced_formdrawer',
      },
      {
        name: '盒子表单(FormBox)',
        type: 1,
        icon: 'edit',
        level: 2,
        show: true,
        routeName: 'doc_advanced_formbox',
      },
      {
        name: '下拉框(Select)',
        type: 1,
        icon: 'icon',
        level: 2,
        show: true,
        routeName: 'doc_form_select',
      },
      {
        name: '可搜索下拉框(SelectSearch)',
        type: 1,
        icon: 'icon',
        level: 2,
        show: true,
        routeName: 'doc_form_select_search',
      },
    ],
  },
]

const setMenusId = (children, parent) => {
  children.forEach((sub, index) => {
    if (parent) {
      sub.id = parent.id + '-' + index
    } else {
      sub.id = index + ''
    }
    if (sub.children && sub.children.length > 0) {
      setMenusId(sub.children, sub)
    }
  })
}

setMenusId(menus)

export default menus
