const instances = new Map();
export default function  Singleton(constructor){
    if(!instances.has(constructor)){
      instances.set(constructor,new constructor());
    }

    return instances.get(constructor);
}