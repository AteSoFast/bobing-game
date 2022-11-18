import { Component, OnInit } from '@angular/core';
// import { guest } from '../main';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public temp = 1;
  public dice: number[]=[7,7,7,7,7,7];
  // public show: boolean = true;
  // public id: boolean = true;
  public use:string="true";
  public times:number=0;
  public output: string="无";
  public format: string=".gif";
  constructor(
    public guestService: GuestService,
  ) {
   }
  // who(){
  //   let id=0;
  //   id=id+1;
  // }
  get currentPlayer() {
    return this.guestService.info[this.guestService.index];
  }
  // get currentpoint() {
  //   return this.guestService.info[this.guestService.index];
  // }

   roll(){
    // const index = this.guestService.info.findIndex(m => m.id == id);
    const player = this.guestService.info[this.guestService.index];
    player.point = [];
    this.format=".png";
    for (let i = 0; i < 6; i++) {
      player.point.push(Math.floor(Math.random()*6+1));
    }
    for(let i=0;i<6;i++){
      this.dice[i]=player.point[i];
    }

    //推测加一
    // if (this.guestService.index != this.guestService.info.length - 1) {
    //   this.guestService.index++;
    // } else {
    //   //本轮结束
    //   this.guestService.index = 0;
    // }
    // console.log(player.point);
    // console.log(player)

    console.log("clicked!");
    let cal: number[] = [0,0,0,0,0,0,0];
    // console.log(cal);
    // const player = this.guestService.info[this.guestService.index];
    for (let i = 0; i < 6; i++) {
      let a=0;
      // console.log(player.point);
      a=player.point[i];
      // console.log(a);
      cal[a]=cal[a]+1;//计算每个数出现次数
      // if(player.point[i]==4){
      //   j=j+1;
      // };
      // console.log(a);
      // console.log(player.point[i]);
    }
    //控制台检测cal问题
    // console.log("take apart");
    // for (let i = 0; i < 6; i++){
    //   // console.log(cal[i]);
    // }
    // console.log(cal);
    //

    let j=0;
    j=cal[4];
    // console.log(j);
    let k=0;//辨识具体的
    let x=0;//标记不为四的
    let y=0;//标记顺子（对堂）
    let z=0;//标记状元插金花
    // test
    // player.point[0]=1;
    // player.point[1]=3;
    // player.point[2]=3;
    // player.point[3]=4;
    // player.point[4]=5;
    // player.point[5]=6;
    // console.log(cal);
    // test
    for(let m = 1;m < 7;m++){
      // console.log(cal[m]==2&&m==1)
      if(cal[m]==2&&m==1){//状元或者插金花判断
        z=1;
      }
      // console.log(cal[m]==1)
      if(cal[m]!=0){//对堂（顺子）
        y=y+1;
      }
      // console.log(cal[m]==4&&m!=4)
      if(cal[m]==4&&m!=4){//对于四个相同且不为四（四进）
        k=1;
        x=1;
      }
      // console.log(cal[m]==5)
      if(cal[m]==5){//对于五个相同（五子登科）
        k=2;
        x=1;
      }
      // console.log(cal[m]==6&&m!=4)
      if(cal[m]==6&&m!=4){//六抔黑
        k=3;
        x=1;
      }
      // console.log(cal[m]==4&&m==4)
      if(cal[m]==4&&m==4){//状元或者插金花
        if(z==1){//插金花
          k=4;
        }
        if(z!=1){//状元
          k=5;
        }
      }

  //外部判断

  console.log(j);
  console.log(x);
  console.log(y);

    if(y==6){//对堂（顺子）
      this.currentPlayer.level="对堂";
      this.output="对堂";
      console.log("对堂");
    }
    if(k==1&&x==1){//四进
      this.currentPlayer.level="四进";
      this.output="四进";
      console.log("四进");
    }
    if(k==2&&x==1){//五子登科
      this.currentPlayer.level="五子登科";
      this.output="五子登科";
      console.log("五子登科");
    }
    if(k==3&&x==1){//六抔黑
      this.currentPlayer.level="六抔黑";
      this.output="六抔黑";
      console.log("六抔黑");
    }
    if(k==4){//状元插金花
      this.currentPlayer.level="状元插金花";
      this.output="状元插金花";
      console.log("状元插金花");
    }
    if(k==5){//状元
      this.currentPlayer.level="状元";
      this.output="状元";
      console.log("状元");
    }
    if(j==1&&x==0&&y!=6){//一秀
      this.currentPlayer.level="一秀";
      this.output="一秀";
      console.log("一秀");
    }
    if(j==2&&x==0){//二举
      this.currentPlayer.level="二举";
      this.output="二举";
      console.log("二举");
    }
    if(j==3&&x==0){//三红
      this.currentPlayer.level="三红";
      this.output="三红";
      console.log("三红");
    }
    if(j==6&&x==0){//六抔红
      this.currentPlayer.level="六抔红";
      this.output="六抔红";
      console.log("六抔红");
    }
    if(x==0&&k==0&&j==0){//没中
      this.currentPlayer.level="没中";
      this.output="没中"
      console.log("没中");
    }
  }
}
  // detect(){
  //   console.log("clicked!");
  //   // let j=0;
  //   let cal: number[] = [];
  //   const player = this.guestService.info[this.guestService.index];
  //   for (let i = 0; i < 6; i++) {
  //     let a=0;
  //     // console.log(player.point);
  //     a=player.point[i];
  //     cal[a]=cal[a]+1;//计算每个数出现次数
  //     // if(player.point[i]==4){
  //     //   j++;
  //     // };
  //     // console.log(a);
  //     // console.log(player.point[i]);
  //   }
  //   //控制台检测cal问题
  //   console.log("take apart");
  //   for (let i = 0; i < 6; i++){
  //     console.log(cal[i]);
  //   }
  //   //
  //   let j=0;
  //   j=cal[4];
  //   console.log(j);
  //   let k=0;//辨识具体的
  //   let x=0;//标记不为四的
  //   let y=0;//标记顺子（对堂）
  //   let z=0;//标记状元插金花
  //   for(let m = 0;m < 6;m++){
  //     // console.log(cal[m]==2&&m==1)
  //     if(cal[m]==2&&m==1){//状元或者插金花判断
  //       z=1;
  //     }
  //     // console.log(cal[m]==1)
  //     if(cal[m]==1){//对堂（顺子）
  //       // y=y+1;
  //       x=x+1;
  //       let level: string ="对堂";
  //       console.log("对堂");
  //     }
  //     // console.log(cal[m]==4&&m!=4)
  //     if(cal[m]==4&&m!=4){//对于四个相同且不为四（四进）
  //       // k=1;
  //       x=x+1;
  //       let level: string ="四进";
  //       console.log("四进");
  //     }
  //     // console.log(cal[m]==5)
  //     if(cal[m]==5){//对于五个相同（五子登科）
  //       // k=2;
  //       x=x+1;
  //       let level: string ="五子登科";
  //       console.log("五子登科");
  //     }
  //     // console.log(cal[m]==6&&m!=4)
  //     if(cal[m]==6&&m!=4){//六抔黑
  //       // k=3;
  //       x=x+1;
  //       let level: string ="六抔黑";
  //       console.log("六抔黑");
  //     }
  //     // console.log(cal[m]==4&&m==4)
  //     if(cal[m]==4&&m==4){//状元或者插金花
  //       if(z==1){//插金花
  //         // k=4;
  //         let level: string ="状元插金花";
  //         console.log("状元插金花");
  //       }
  //       if(z!=1){//状元
  //         // k=5;
  //         let level: string ="状元";
  //         console.log("状元");
  //       }
  //     }
  //     // console.log(j==1&&x!=1&&y!=6)
  //     if(j==1&&x!=1&&y!=6){//一秀
  //       let level: string ="一秀";
  //       console.log("一秀");
  //     }
  //     // console.log(j==2&&x!=1)
  //     if(j==2&&x!=1){//二举
  //       let level: string ="二举";
  //       console.log("二举");
  //     }
  //     // console.log(j==3&&x!=1)
  //     if(j==3&&x!=1){//三红
  //       let level: string ="三红";
  //       console.log("三红");
  //     }
  //     // console.log(j==6&&x!=1)
  //     if(j==6&&x!=1){//六抔红
  //       let level: string ="六抔红";
  //       console.log("六抔红");
  //     }
  //     else{
  //       console.log("没中");
  //     }
  //   }
  // }
  bind(){
    for(let i=0;i<6;i++){
      this.currentPlayer.point[i]
    }
  }
  game(){
    // this.who();
    if(this.use=="true"){
      this.roll();
      this.use="false";
    }

    // this.detect();
  }
  complete(){
    if(this.use=="false"){
      for(let i=0;i<6;i++){
        this.dice[i]=7;
      }
      this.format=".gif";
      if (this.guestService.index != this.guestService.info.length - 1) {
        // this.currentPlayer.point=[0,0,0,0,0,0];
        this.guestService.index++;
        this.times=this.times+1;
      } else {
        //本轮结束
        //将point数组置为0
        // for(let i=0;i<this.guestService.index;i++){
        //   this.currentPlayer.point=[0,0,0,0,0,0];
        // }
        // for(let i=0;i<this.times;i++)

        // this.currentPlayer.point=[0,0,0,0,0,0];
        this.guestService.index = 0;
        this.guestService.info.forEach(m => m.point = [0, 0, 0, 0, 0, 0]);
        this.guestService.info.forEach(m => m.level = "无")
      }
      this.use="true";
      this.output="无";
    }
    // else{
    //   console.log("you should roll first");
    // }
  }
  ngOnInit(): void {

  }
}
