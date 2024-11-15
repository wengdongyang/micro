const rule = [
  {
    type: 'input',
    label: '输入框',
    info: '输入框',
    props: {
      type: 'text',
      disabled: true,
      maxlength: 100,
      showCount: true,
      allowClear: true,
      placeholder: '输入框',
    },
    name: 'ref_Ft0fm3h5l2g1aec',
  },
  {
    type: 'inputNumber',
    field: 'Fv70m3h5l66xalc',
    label: '数字输入框',
    info: '123',

    props: {
      disabled: true,
      min: 1,
      max: 10,
      precision: 2,
      step: 1,
      placeholder: '输入框占位文本',
    },
    name: 'ref_Fbcrm3h5l66xanc',
  },
  {
    type: 'select',
    field: 'Fcyrm3h5lb8pauc',
    label: '选择器',
    info: '123',

    props: {
      disabled: true,
      allowClear: true,
      mode: 'combobox',
      placeholder: '123123',
    },
    options: [
      { label: '选项01', value: '1' },
      { label: '选项02', value: '2' },
      { label: '选项03', value: '3' },
    ],
    name: 'ref_Fi6km3h5lb8pawc',

    ignore: false,
  },
  {
    type: 'datePicker',
    field: 'Ffc6m3h5libcbcc',
    label: '日期',
    info: '提示信息',

    props: {
      disabled: true,
      picker: 'year',
      showTime: true,
      allowClear: true,
      inputReadOnly: true,
      placeholder: '123',
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
    },
    name: 'ref_F1z1m3h5libcbec',
  },
  {
    type: 'datePicker',
    field: 'F05pm3h5ljzebfc',
    label: '日期区间',
    info: '',

    props: {
      range: true,
      picker: 'year',
      disabled: true,
      showTime: true,
      allowClear: true,
      inputReadOnly: true,
      placeholder: ['YYYY-MM-DD', 'YYYY-MM-DD'],
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
    },
    name: 'ref_F4y3m3h5ljzebhc',
  },
  {
    type: 'aTreeSelect',
    field: 'Fpgmm3h5oknnc2c',
    modelField: 'value',
    label: '树形选择',
    info: '提示信息',

    props: {
      treeNodeFilterProp: 'label',
      treeData: [
        {
          label: '选项201',
          value: '1',
          children: [
            {
              label: '选项1-101',
              value: '2',
              children: [
                { label: '选项1-1-01', value: '3' },
                { label: '选项1-1-02', value: '4' },
                { label: '选项1-1-03', value: '5' },
              ],
            },
            {
              label: '选项1-102',
              value: '6',
              children: [
                { label: '选项1-2-01', value: '7' },
                { label: '选项1-2-02', value: '8' },
                { label: '选项1-2-03', value: '9' },
              ],
            },
            {
              label: '选项1-103',
              value: '10',
              children: [
                { label: '选项1-3-01', value: '11' },
                { label: '选项1-3-02', value: '12' },
                { label: '选项1-3-03', value: '13' },
              ],
            },
          ],
        },
        {
          label: '选项202',
          value: '14',
          children: [
            {
              label: '选项2-101',
              value: '15',
              children: [
                { label: '选项2-1-01', value: '16' },
                { label: '选项2-1-02', value: '17' },
                { label: '选项2-1-03', value: '18' },
              ],
            },
            {
              label: '选项2-102',
              value: '19',
              children: [
                { label: '选项2-2-01', value: '20' },
                { label: '选项2-2-02', value: '21' },
                { label: '选项2-2-03', value: '22' },
              ],
            },
            {
              label: '选项2-103',
              value: '23',
              children: [
                { label: '选项2-3-01', value: '24' },
                { label: '选项2-3-02', value: '25' },
                { label: '选项2-3-03', value: '26' },
              ],
            },
          ],
        },
      ],
      multiple: true,
      disabled: true,
      allowClear: true,
      showSearch: true,
      treeCheckable: true,
      treeDefaultExpandAll: true,
      treeLine: true,
    },
    name: 'ref_F2him3h5oknnc4c',
  },
  {
    type: 'cascader',
    field: 'Ffcdm3h5lkvabic',
    label: '级联选择器',
    info: '提示信息',

    props: {
      options: [
        {
          label: '选项201',
          value: '1',
          children: [
            {
              label: '选项1-101',
              value: '2',
              children: [
                { label: '选项1-1-01', value: '3' },
                { label: '选项1-1-02', value: '4' },
                { label: '选项1-1-03', value: '5' },
              ],
            },
          ],
        },
      ],
      disabled: true,
      allowClear: true,
      multiple: true,
      placeholder: '输入框占位文本',
      showSearch: true,
    },
    name: 'ref_F5o9m3h5lkvabkc',
  },
  {
    type: 'radio',
    field: 'Fktqm3h5l8naaoc',
    label: '单选框',
    info: '',

    props: { disabled: true, optionType: 'button' },
    options: [
      { label: '选项01', value: '1' },
      { label: '选项02', value: '2' },
      { label: '选项03', value: '3' },
    ],
    name: 'ref_F9zkm3h5l8naaqc',
  },
  {
    type: 'checkbox',
    field: 'Fnkfm3h5l9vfarc',
    label: '多选框',
    info: '提示信息',
    props: { disabled: true },
    options: [
      { label: '选项01', value: '1' },
      { label: '选项02', value: '2' },
      { label: '选项03', value: '3' },
    ],
    name: 'ref_Fm3cm3h5l9vfatc',
  },
  {
    type: 'upload',
    field: 'Fx59m3h5llz8blc',
    label: '上传',
    info: '',

    props: {
      listType: 'picture-card',
      disabled: true,
      multiple: true,
    },
    name: 'ref_Fmqrm3h5llz8bnc',
  },
  {
    type: 'fcEditor',
    field: 'Fiqfm3h5p7ikc5c',
    label: '富文本框',
    info: '',

    name: 'ref_F9zcm3h5p7ikc7c',
  },
];
