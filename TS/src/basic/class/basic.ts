/* 存取器
除了上边提到的修饰符之外，在 TypeScript 中还可以通过getter、setter截取对类成员的读写访问。
通过对类属性访问的截取，我们可以实现一些特定的访问控制逻辑。下面我们把之前的示例改造一下，如下代码所示： */
{
  class Son {
    public firstName: string;
    protected lastName: string = 'Stark';
    constructor(firstName: string) {
      this.firstName = firstName;
    }
  }
  class GrandSon extends Son {
    constructor(firstName: string) {
      super(firstName);
    }
    get myLastName() {
      return this.lastName;
    }
    set myLastName(name: string) {
      if (this.firstName === 'Tony') {
        this.lastName = name;
      } else {
        console.error('Unable to change myLastName');
      }
    }
  }
  const grandSon = new GrandSon('Tony');
  console.log(grandSon.myLastName); // => "Stark"
  grandSon.myLastName = 'Rogers';
  console.log(grandSon.myLastName); // => "Rogers"
  const grandSon1 = new GrandSon('Tony1');
  grandSon1.myLastName = 'Rogers'; // => "Unable to change myLastName"
}
/* 索引签名
在实际工作中，使用接口类型较多的地方是对象，比如 React 组件的 Props & State、HTMLElement 的 Props，这些对象有一个共性，
即所有的属性名、方法名都确定。实际上，我们经常会把对象当 Map 映射使用，比如下边代码示例中定义了索引是任意数字的对象
 LanguageRankMap 和索引是任意字符串的对象 LanguageMap。 */
{
  let LanguageRankMap = {
    1: 'TypeScript',
    2: 'JavaScript',
  };
  let LanguageMap = {
    TypeScript: 2012,
    JavaScript: 1995,
  };
  /* 这个时候，我们需要使用索引签名来定义上边提到的对象映射结构，并通过 “[索引名: 类型]”的格式约束索引的类型。
  索引名称的类型分为 string 和 number 两种，通过如下定义的 LanguageRankInterface 和 LanguageYearInterface 两个接口，
  我们可以用来描述索引是任意数字或任意字符串的对象。 */
  {
    interface LanguageRankInterface {
      [rank: number]: string;
    }
    type LanguageRankType = {
      [rank in number | string]: string;
    };
    interface LanguageYearInterface {
      [name: string]: number;
    }
    {
      let LanguageRankMap: LanguageRankInterface = {
        1: 'TypeScript', // ok
        2: 'JavaScript', // ok
        4: 'react', // ok
        6: 'vue', // ok
        'WrongINdex': '2012' // ts(2322) 不存在的属性名
      };
      let LanguageRankType: LanguageRankType = {
        1: 'TypeScript', // ok
        2: 'JavaScript', // ok
        4: 'react', // ok
        6: 'vue', // ok
        'WrongINdex': '2012' // ts(2322) 不存在的属性名
      };
      let LanguageMap: LanguageYearInterface = {
        TypeScript: 2012, // ok
        JavaScript: 1995, // ok
        1: 1970 // ok
      };
    }
  }
}
