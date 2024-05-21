import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, BigIntColumn as BigIntColumn_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, OneToOne as OneToOne_} from "@subsquid/typeorm-store"
import {Packet} from "./packet.model"

@Entity_()
export class WriteAckPacket {
    constructor(props?: Partial<WriteAckPacket>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    dispatcherAddress!: string

    @StringColumn_({nullable: false})
    dispatcherType!: string

    @StringColumn_({nullable: false})
    dispatcherClientName!: string

    @StringColumn_({nullable: false})
    writerPortAddress!: string

    @StringColumn_({nullable: false})
    writerChannelId!: string

    @BigIntColumn_({nullable: false})
    sequence!: bigint

    @BooleanColumn_({nullable: false})
    ackPacketSuccess!: boolean

    @StringColumn_({nullable: false})
    ackPacketData!: string

    @BigIntColumn_({nullable: false})
    blockNumber!: bigint

    @BigIntColumn_({nullable: false})
    blockTimestamp!: bigint

    @StringColumn_({nullable: false})
    transactionHash!: string

    @IntColumn_({nullable: false})
    chainId!: number

    @BigIntColumn_({nullable: false})
    gas!: bigint

    @BigIntColumn_({nullable: true})
    gasPrice!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    maxFeePerGas!: bigint | undefined | null

    @BigIntColumn_({nullable: true})
    maxPriorityFeePerGas!: bigint | undefined | null

    @StringColumn_({nullable: false})
    from!: string

    @OneToOne_(() => Packet, e => e.writeAckPacket)
    packet!: Packet | undefined | null

    @StringColumn_({nullable: true})
    polymerTxHash!: string | undefined | null

    @IntColumn_({nullable: true})
    polymerGas!: number | undefined | null

    @BigIntColumn_({nullable: true})
    polymerBlockNumber!: bigint | undefined | null
}
