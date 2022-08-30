import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { ProjectShare } from 'src/project/entity/project-share.entity'
import { Project } from 'src/project/entity/project.entity'
import { ProjectService } from 'src/project/project.service'
import { Repository } from 'typeorm'
import { AnalyticsService } from './analytics.service'

describe('AnalyticsService', () => {
  let service: AnalyticsService
  let projectsRepository: Repository<Project>
  let projectShareRepository: Repository<ProjectShare>
  const PROJECT_REPOSITORY_TOKEN = getRepositoryToken(Project)
  const PROJECTSHARE_REPOSITORY_TOKEN = getRepositoryToken(ProjectShare)
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnalyticsService,
        ProjectService,
        {
          provide: PROJECT_REPOSITORY_TOKEN,
          useValue: { create: jest.fn(), save: jest.fn(), findOne: jest.fn() },
        },
        {
          provide: PROJECTSHARE_REPOSITORY_TOKEN,
          useValue: { create: jest.fn(), save: jest.fn(), findOne: jest.fn() },
        },
      ],
    }).compile()
    projectsRepository = module.get<Repository<Project>>(
      PROJECT_REPOSITORY_TOKEN,
    )
    projectShareRepository = module.get<Repository<ProjectShare>>(
      PROJECTSHARE_REPOSITORY_TOKEN,
    )
    service = module.get<AnalyticsService>(AnalyticsService)
  })

  describe('root', () => {
    it('should be defined', () => {
      expect(service).toBeDefined()
    })
  })
})
