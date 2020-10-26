export default ( parts ) => {
    if (parts.length ===  0) {
        return 0;
    } else {
            let containers = []
            parts.forEach((el_parts) => {
                if(containers.filter((el_container)=> el_container === el_parts.location).length === 0)
                    containers.push(el_parts.location)
                }   
            )
            return containers.length
            /*
            reduce( (containers, part) => {
                if (containers.forEach((el) => part.location !== el)) {
                    containers.push(part.location)
                }
            }
            ).length
            */
    }
}