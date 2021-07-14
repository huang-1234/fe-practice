/* React组件
小贴士：对于 React 开发者而言，组件也支持泛型，如下代码所示。 */
{

  function GenericCom<P>(props: {
    prop1: string
  }) {
    return (
      <div>
        {props.prop1}
      </div>
    );
  };
  <GenericCom<{ name: string; }> prop1="1" />
  // 或者换种写法
  interface GenericComProps{
    prop1:string
  }
  function GenericComInterface<P>(props: GenericComProps) {
    return (
      <div>
        {props.prop1}
      </div>
    );
  };
  <GenericComInterface<GenericComProps> prop1="1" />
}