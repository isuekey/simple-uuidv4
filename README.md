# 动机 #
使用uuidv4的时候，如果自己写没有问题，但是比较烦复制代码。
如果引入uuid包的话，又有很多包用不到。

# 用法 #
  * npm i simple-uuidv4
  * import * as simpleUUIdV4 from 'simple-uuidv4';
  * simpleUUIdV4.uuid(); //返回一个第四版uuid字符串
  * simpleUUIdV4.hexArray; //一个冻结的hexArray，长度256，2位16进制数
  * simpleUUIdv4.randomHex(size); //返回size长度的array，填充随机2位16进制数
  
