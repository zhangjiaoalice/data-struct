# 箭头函数有什么特点？什么时候不能用箭头函数？
箭头函数的this指向副作用域，不是当前对象

## 特点
1. 没有arguments参数
2. 无法通过apply、call、bind 更改this指向
3. 某些箭头函数难以阅读

## 不适用箭头函数的地方
1. 对象方法不适用箭头函数
```!javascript
cosnt obj = {
    name: 'alice',
    getName: () => {
        // this 指向不是当前对象
        return this.name
    }
}

console.log(obj.getName())
```

2. 原型方法不适用箭头函数
```!javascript
cosnt obj = {name: "alice"}
obj.__proto__.getName = () => {
    return this.name
}
console.log(obj.getName())
```

3. 构造函数不适用箭头函数
```!javascript
cosnt Foo = (name, age) => {
    this.name = name
    this.age = age
}
const f = new Foo('alice', 22) // error, Foo is not a constructor
```

4. 动态上下文中的回调函数
```!javascript
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    console.log(this === window)
    this.innerHtml = 'clicked'
})
```

5. Vue 生命周期和method


# 三次握手
三次握手是为了对每次发送的数据量进行跟踪与协商，确保数据的发送和接收同步，根据所接收到的数据量而确认数据发送、接受完毕后何时撤掉联系，并建立虚链接

`TCP 是一种面向连接的，可靠的，基于字节流的传输通信协议`

`为了提供可靠的传送，tcp在发送新的数据之前，以特定的顺序将数据包的序号，并需要这些包传送给目标服务器之后的确认消息`

### 为了建立tcp链接，通新双方必须从对方了解如下信息：
1. 对方报文发送的开始序号
2. 对方发送数据的缓冲区大小
3. 能被接收的最大报文段长度MSS
4. 被支持的TCP选项

### 三次握手的过程
1. 第一次握手: 客户端向服务端发送`SYN`包（Synchronize Sequence Numbers，同步序列编号），并进入`SYN_SENT`(表示请求连接)状态，等待服务器确认;

2. 第二次握手: 服务器端接收到客户端传送的`SYN`包之后，必须自己确认客户端的syn,同时自己也发送一个`SYN`包（SYN + ACK）,此时服务器端进入`SYN_RECV`状态

3. 第三次握手: 客户端接收到服务器端的syn+ack包之后，向服务器发送确认包ACK,服务器端接收到这个包之后，服务器就进入`ESTABLISHD`(tcp连接成功)状态，完成三次握手

### 三次握手过程中的一些重要概念
1. `未连接队列`： 在tcp连接建立的过程总，服务器会维护一个未连接的队列，这个队列为每个客户端的SYN包开设一个条目，该条目表明服务器已经接收到SYN包，并向客户发出确认，正在等待客户的确认包。这些条目所表示的连接在服务器处于SYN_RECV状态,当服务器收到客户的确认包时删除该条亩，服务器进入`ESTABLISHD`状态

2. `Backlog 参数`: 表示内核为相应套接字排队的最大连接个数.syn-ack重传次数服务器发送完SYN-ACK包，如果未收到客户确认包，服务器进行首次重传，等待一段时间仍未接收到客户端的ACK包，进行二次重传，如果重传的次数超过系统规定的最大重传次数，系统将该连接信息从半连接队列中删除。每次重传的等待时间不一定是相同的

3. `半连接存活时间`: 半连接队列条亩存活的最长时间，即从服务器接收到SYN包到确认这个报文无效的最长时间，该时间值是所有重传请求包的最长等待时间的总和，有时我们也称半连接存活时间为Timeout时间、SYN_RECV时间

# 四次挥手(释放连接)
1. 第一步： 当客户端向服务器端发送一个带有FIN附加标记的报文段
2. 第二步： 服务器端接收到FIN字段之后，并不会立即用FIN报文回复客户端,而是回向客户端发送一个确认序号ACK(发送ACK 是为了防止在这段时间呢，客户端重传FIN报文)
3. 第三步: 服务器端向客户端发功一个FIN报文，通知客户端要彻底释放连接
4. 第四步: 客户端接收到FIN报文之后，向服务器端发送一个ACK表示彻底释放连接