import api from "../api";

export async function pegaRepositorioDoUsuario(id) {
     try{
        const resultado =  await api.get(`/repos?postId=${id}`);
        return resultado.data
    }
    catch (error){
        console.log(error)
        return []
    }
    
}

export async function salvarRepositoriosDoUsuario(postId, nome, data, id) {
    try{
        await api.post(`/repos/${id}`, 
            {
            name: nome,
            data: data,
            postId: postId
            }
        );
    }catch (error){
        console.log("O erro é: "+error)
        return 'erro'
    }
}

export async function criarRepositorioDoUsuario(postId, nome, data) {
    try{
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId
            });
            return 'sucesso'
    }catch (error){
        console.log("O erro é: "+error)
        return 'erro'
    }
}

export async function deletarRepositorioDoUsuario(id) {
    try{
        await api.delete(`/repos/${id}`);
            return 'sucesso'
    }catch (error){
        console.log("O erro é: "+error)
        return 'erro'
    }
}