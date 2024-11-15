import styles from './SearchForm.module.less';
import { computed, defineComponent, ref, Fragment } from 'vue';
import { ConfigProvider, Form, FormItem, Input, InputNumber, Select, DatePicker, Tooltip } from 'ant-design-vue';
// apis
// hooks
// utils
// stores
// configs
import { FORM_ITEM_TYPE } from '@src/configs';
import classNames from 'classnames';
// components
// props
// emits
// refs
// computed
// methods
// watch
export default defineComponent(
  (props, { emit, slots }) => {
    const targetDomRef = ref();
    const innerValues = computed({
      get: oldValue => {
        return props.values;
      },
      set: value => {
        emit('update:values', value);
      },
    });
    return () => {
      return (
        <ConfigProvider
          input={{ autocomplete: 'off' }}
          getPopupContainer={node => {
            if (targetDomRef.value) {
              return targetDomRef.value;
            }
            return document.body;
          }}
        >
          <section ref={ref => (targetDomRef.value = ref)}>
            <Form
              class={styles['form']}
              layout='inline'
              model={innerValues.value}
            >
              {props.rules.map(rule => (
                <FormItem
                  class={styles['form-item']}
                  key={rule.name}
                  name={rule.name}
                >
                  {{
                    label: () => {
                      if (rule.info) {
                        return (
                          <Fragment>
                            <Tooltip>
                              {{
                                title: () => rule.info,
                                default: () => <i class={classNames('fa', 'fa-question-circle-o', styles['icon-info'])} />,
                              }}
                            </Tooltip>
                            {rule.label}
                          </Fragment>
                        );
                      }
                      return rule.label;
                    },
                    default: () => {
                      const { props = {} } = rule;
                      switch (rule.type) {
                        case FORM_ITEM_TYPE.INPUT:
                          return (
                            <Input
                              v-model:value={innerValues.value[rule.name]}
                              class={styles['input']}
                              type={props.type}
                              disabled={props.disabled}
                              maxlength={props.maxlength}
                              showCount={props.showCount}
                              allowClear={props.allowClear}
                              placeholder={props.placeholder}
                            />
                          );
                        case FORM_ITEM_TYPE.INPUT_NUMBER:
                          return (
                            <InputNumber
                              v-model:value={innerValues.value[rule.name]}
                              class={styles['input-number']}
                              max={props.max}
                              min={props.min}
                              step={props.step}
                              controls={props.controls}
                              disabled={props.disabled}
                              precision={props.precision}
                              placeholder={props.placeholder}
                            />
                          );
                        case FORM_ITEM_TYPE.SELECT:
                          return (
                            <Select
                              v-model:value={innerValues.value[rule.name]}
                              class={styles['select']}
                              options={rule.options}
                              disabled={props.disabled}
                              placeholder={props.precision}
                              allowClear={props.allowClear}
                              fieldNames={props.fieldNames}
                              filterOption={props.filterOption}
                            />
                          );
                        case FORM_ITEM_TYPE.DATE_PICKER:
                          return (
                            <DatePicker
                              v-model:value={innerValues.value[rule.name]}
                              class={styles['date-picker']}
                              options={rule.options}
                              disabled={props.disabled}
                              placeholder={props.precision}
                              allowClear={props.allowClear}
                              fieldNames={props.fieldNames}
                              filterOption={props.filterOption}
                            />
                          );
                        case FORM_ITEM_TYPE.CUSTOM:
                          return <Fragment>{slots.renderForm && slots.renderForm({ rule, values: innerValues.value })}</Fragment>;
                        default:
                          return (
                            <Input
                              v-model:value={innerValues.value[rule.name]}
                              class={styles['input']}
                              type={props.type}
                              disabled={props.disabled}
                              maxlength={props.maxlength}
                              showCount={props.showCount}
                              allowClear={props.allowClear}
                              placeholder={props.placeholder}
                            />
                          );
                      }
                    },
                  }}
                </FormItem>
              ))}
            </Form>
          </section>
        </ConfigProvider>
      );
    };
  },
  {
    name: 'SearchForm',
    props: {
      values: { type: Object, required: true },
      rules: { type: Array, required: true },
    },
    emits: ['update:values'],
  },
);
