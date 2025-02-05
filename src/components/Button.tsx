interface Ibutton {
    name: string,
    style?: string,
  }

export default function butoonComponent(prop:Ibutton){
    return(
        <>

        <button className={prop.style}>{prop.name}</button>
        </>
    )
}