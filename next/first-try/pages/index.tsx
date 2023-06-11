import Layout from "@/components/Layout";

export default function Index() {

    console.log('result: ' + searchInsert([1,3,5,6], 7));

    return (
        <>
            <Layout>
                <h1>Hi everyone!</h1>
            </Layout>
        </>
    )
}

function searchInsert(nums: number[], target: number): number {
    if(nums.length === 0){
        nums.push(target);
        return 0;
    }

    const result = checkTarget(nums, target);
    if(nums[result] === target)
        return result;

    nums.splice(result, 0, target);
    return result;
};

function checkTarget(nums: number[], target: number): number {
    if(nums.length === 1)
        return nums[0] === target ? ;

    const middleNum = Math.round(nums.length / 2);
    if(nums[middleNum] === target)
        return middleNum;

    if(nums.length === 2)
        return nums[0] === target ? middleNum : middleNum;

    let result: number;

    if(nums[middleNum] > target)
        return result = checkTarget(nums.slice(0, middleNum), target);
    else {
        result = checkTarget(nums.slice(middleNum + 1, nums.length), target);
        return middleNum + result + 1;
    }
}