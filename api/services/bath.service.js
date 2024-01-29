import boom from '@hapi/boom';

class BathService {

    constructor() {
        this.baths = [];

    }

    async create(data) {
        const newBath = {
            id: generateUniqueId(),
            ...data
        }
        this.baths.push(newBath);
    }

    async find() {
        return {
            success: true,
            baths: this.baths,
            message: 'Baths list'
        };
    }

    async findOne(id) {
        const bath = this.baths.find(bath => bath.id == id);
        if (!bath) throw boom.notFound('Bath not found');
        return {
            success: true,
            bath,
            message: 'Bath deleted'
        };
    }

    async update(id, changes) {
        const index = this.baths.findIndex(bath => bath.id == id);
        if (index === -1) throw boom.notFound('Bath not found');
        this.baths[index] = {
            ...this.baths[index],
            changes
        };
        return {
            success: true,
            bath: this.baths[index],
            message: 'Bath updated'
        };
    }

    async delete(id) {
        const index = this.baths.findIndex(bath => bath.id == id);
        if (index === -1) throw boom.notFound('Bath not found');
        this.baths.slice(index, 1);
        return {
            success: true,
            id,
            message: 'Bath deleted'
        };
    }

    generateUniqueId() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');
        const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

        const uniqueId = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;

        return uniqueId;
      }
}

export default BathService;