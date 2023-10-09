import { Badge, Button , TextField ,Select,Checkbox , Radio  } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react'
export default function Targil(){
    const [lain,setLain] = useState("")
    const [tex,setTex] = useState("")
    return(
        <>
        <h1>{lain}</h1>
        <Button onClick={()=>setLain(tex)}  variant="outlined">
            Error
        </Button>
        <TextField sx={{backgroundColor:"black"}} onChange={(e)=>setTex(e.target.value)}>
            gilad sinai
        </TextField>
        <Select sx={{backgroundColor:"blue"}}>
            <option>lljbv</option>
            <option>lljbv</option>
            <option>lljbv</option>
            
        </Select >
        <Checkbox sx={{'&:hover':{backgroundColor:"red"}}}></Checkbox>
        <div>
        <Radio ></Radio>
        <Radio></Radio>
        <Radio></Radio>
        </div>
        <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
        </>
    )
}